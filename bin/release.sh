#!/bin/bash

# Function to increment a version string
increment_version() {
    local version=$1
    local part=$2
    local IFS=.
    # Remove the leading 'v' and split into parts
    local -a parts=(${version#v})

    # Increment the appropriate part of the version
    case $part in
        major)
            ((parts[0]++))
            parts[1]=0
            parts[2]=0
            ;;
        minor)
            ((parts[1]++))
            parts[2]=0
            ;;
        patch)
            ((parts[2]++))
            ;;
        *)
            echo "Error: Invalid version part '$part'"
            exit 1
            ;;
    esac

    # Reassemble the version with the leading 'v'
    echo "v${parts[0]}.${parts[1]}.${parts[2]}"
}

# Main script starts here
version_part=${1:-patch}

# Ensure we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: Not in a Git repository."
    exit 1
fi

# check if we are in main branch
if [[ $(git branch --show-current) != "main" ]]; then
    echo "Error: Not in main branch."
    exit 1
fi

# check if there are any uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "Error: There are uncommitted changes."
    exit 1
fi

# check if there are any unpulled changes
if ! git fetch --dry-run > /dev/null 2>&1; then
    echo "Error: There are unpulled changes."
    exit 1
fi

# Get the latest tag
last_tag=$(git describe --tags `git rev-list --tags --max-count=1`)

# Check if the last tag is a valid semantic version with a leading 'v'
if ! [[ $last_tag =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Last tag ($last_tag) is not a valid semantic version with a leading 'v'."
    exit 1
fi

# Calculate the new version
new_version=$(increment_version $last_tag $version_part)
echo "New version will be: $new_version"

# Confirm with the user before tagging and pushing
read -p "Do you want to proceed with creating and pushing this tag? (Y/n) " confirmation
if [[ $confirmation =~ ^[Yy]$ ]]; then
    # Tag the new version
    git tag $new_version

    # Push only the new tag to the origin
    git push origin $new_version

    echo "Release $new_version created and pushed successfully."

    # Create a release on GitHub
    read -p "Do you want to create a release on GitHub? (Y/n) " create_release

    if [[ $create_release =~ ^[Yy]$ ]]; then
      gh release create $new_version --generate-notes
      echo "Release $new_version created on GitHub."
    else
      echo "Release $new_version not created on GitHub."
    fi
else
    echo "Tag creation and push cancelled."
fi
