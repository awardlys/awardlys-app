import { Button } from "./button";
import { TrophyIcon, TagIcon, ArrowRightStartOnRectangleIcon, ArchiveBoxIcon } from '@heroicons/react/20/solid';

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between h-full pb-2">
      <div>
        <h1 className="text-xl font-bold pb-3">Awards</h1>
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <Button icon={<TrophyIcon className="h-4 w-4"/>}>Premiações</Button>
            </li>
            <li>
              <Button icon={<TagIcon className="h-4 w-4"/>}>Categorias</Button>
            </li>
            <li>
              <Button icon={<ArchiveBoxIcon className="h-4 w-4"/>}>Itens</Button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Button icon={<ArrowRightStartOnRectangleIcon className="h-4 w-4"/>}>Sair</Button>
      </div>
    </aside>
  );
}
