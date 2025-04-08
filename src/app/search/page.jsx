import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import { input } from "styled-jsx/css";

export default function Search() {
  return (
    <ConnectedLayout>
      <div className="mt-10 md:w-[700px] mx-auto w-full">
        {/* Search */}
        <form>
          <input
            type="search"
            placeholder="Rechercher..."
            className="bg-threads-gray-light block w-full mt-3 text-threads-gray-dark rounded-xl p-5 placeholder:text-threads-gray-dark"
          />
        </form>

        {/* Results */}
        <div className="mt-32 text-center text-threads-gray-light">
          Rechercher des profils à découvrir
        </div>
      </div>
    </ConnectedLayout>
  );
}
