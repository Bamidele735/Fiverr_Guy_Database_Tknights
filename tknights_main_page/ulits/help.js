import { useRouter } from 'next/router';
function SomePage(props) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
}
export async function getServerSideProps(context) {
  // Database logic here
}