import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <Link href="/about">
        <a style={{ fontSize: 20 }}>About Page</a>
      </Link>

      <p>hello world</p>
    </div>
  );
};

export default Index;
