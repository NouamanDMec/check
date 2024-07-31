import Image from 'next/image';

const UnderConstruction = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>We&apos;re Still Thinking About This Page</h1>
      <Image
        src="https://via.placeholder.com/500x500.png?text=Thinking..."
        alt="Thinking Placeholder"
        width={500}
        height={500}
      />
    </div>
  );
};

export default UnderConstruction;
