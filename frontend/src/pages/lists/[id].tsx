import { useRouter } from "next/router";
import ListForm from "../../components/ListForm";

export default function EditList() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  return <ListForm listId={id as string} />;
}
