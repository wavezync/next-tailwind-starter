import { useTheme } from "@/contexts/ThemeContext";
import { queries } from "@api/products/queries";
import { Button } from "@components/ui/Button/Button";
import { Input } from "@components/ui/Input/Input";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery(queries.products.search({ search }));
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="bg-app-bg flex flex-row justify-center">
        <div className="flex min-w-96 flex-col">
          <div className="text-app-primary-text m-5 text-center">
            Welcome to WaveZync NextJS Tailwind StarterKit. <br /> You can
            remove{" "}
            <b className="text-app-tertiary-text">
              src/components/HomePage.tsx
            </b>{" "}
            and start building your own components.
          </div>

          <h1 className="text-app-primary-text flex justify-center p-5 text-center align-middle text-5xl font-bold">
            Products
            <Button
              className="ml-2"
              onClick={toggleTheme}
              intent="primary"
              size="sm"
              outline
            >
              {theme === "light" ? "Dark" : "Light"}
            </Button>
          </h1>
          <div className="my-3">
            <Input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {isLoading && <div className="">Loading...</div>}
          {data && !isLoading && (
            <div className="flex flex-col items-center">
              {data.products.map((p) => (
                <div
                  key={p.id}
                  className="text-app-primary-text hover:bg-app-secondary-hover/20 mb-2 flex w-full max-w-xl rounded-md p-2 align-middle outline transition-all hover:-translate-y-0.5"
                >
                  <div className="relative h-24 w-32">
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill={true}
                      style={{
                        objectFit: "cover",
                      }}
                      className="w-24"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col pl-1">
                    <div className="font-bold">
                      {p.title}
                      <span className="pl-1 text-sm font-light italic">
                        {p.price / 100} $
                      </span>
                      <div className="bg-app-tertiary/40 text-app-primary-text w-fit rounded-lg px-1 py-0.5 font-mono text-sm italic">
                        {p.brand}
                      </div>
                    </div>
                    <div className="text-sm">{p.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
