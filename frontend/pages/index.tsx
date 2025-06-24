export async function getServerSideProps() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/message`);
  const data = await res.json();
  return {
    props: {
      message: data.message,
    },
  };
}
