import { useRouter } from "next/router";

export default function RecipeListPage() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/recipe/new")}>레시피 등록하기</button>
  );
}
