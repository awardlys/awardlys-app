"use client";
import {
  ArchiveBoxIcon,
  ArrowRightStartOnRectangleIcon,
  TagIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";
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
                icon={<TrophyIcon className="h-4 w-4" />}
              >
                Premiações
              </Button>
            </li>
            <li>
              <Button
                onClick={() => push("/admin/categories")}
                variant={current("categories")}
                icon={<TagIcon className="h-4 w-4" />}
              >
                Categorias
              </Button>
            </li>
            <li>
              <Button
                onClick={() => push("/admin/items")}
                variant={current("items")}
                icon={<ArchiveBoxIcon className="h-4 w-4" />}
              >
                Itens
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Button icon={<ArrowRightStartOnRectangleIcon className="h-4 w-4" />}>
          Sair
        </Button>
      </div>
    </aside>
  );
}
