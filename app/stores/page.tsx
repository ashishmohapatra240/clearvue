import { StoreLocator } from "../components/StoreLocator";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <StoreLocator featured={false} />
      </div>
    </div>
  );
} 