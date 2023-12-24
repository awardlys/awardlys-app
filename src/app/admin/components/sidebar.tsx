"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";

export function Sidebar() {
  const { push } = useRouter();
  const path = usePathname();
  const page = path.split("/")[2];
  const current = (section: string) =>
    page === section ? "current" : "primary";

  return (
    <aside className="flex flex-col justify-between h-full pb-2">
      <div>
        <h1 className="text-xl font-bold pb-3">Awards</h1>
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <Button
                onClick={() => push("/admin/awards")}
                variant={current("awards")}
              >
                Premiações
              </Button>
            </li>
            <li>
              <Button
                onClick={() => push("/admin/categories")}
                variant={current("categories")}>
                Categorias
              </Button>
            </li>
            <li>
              <Button
                onClick={() => push("/admin/items")}
                variant={current("items")}>
                Itens
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Button>
          Sair
        </Button>
      </div>
    </aside>
  );
}
