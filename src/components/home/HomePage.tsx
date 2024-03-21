import { useProductsQuery } from "@/src/lib/api/products/hooks/useProductsQuery";
import Image from "next/image";
import { useState } from "react";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useProductsQuery({
    search,
  });

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-bold">Products</h1>
          <div className="my-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          {isLoading && <div className="">Loading...</div>}
          {data && !isLoading && (
            <div>
              {data.products.map((p) => (
                <div
                  key={p.id}
                  className="mb-2 flex w-96  rounded-md p-2 outline transition-all hover:-translate-y-1 hover:bg-app-tertiary-hover/10"
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
                      <div className="w-fit rounded-lg bg-app-primary px-1 py-0.5 font-mono text-sm italic text-white">
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
