export default function Lambda({ random }: { random: number }) {
  return (
    <div>
      <h1>Random number {random}</h1>
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      random: Math.random(),
    },
  };
};
