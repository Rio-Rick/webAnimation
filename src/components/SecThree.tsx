export default function SecThree({ org }: { org: String }) {
  return (
    <div className="m-2 text-center bg-white text-to-top-sec3">
      <div className="border-2 p-10 border-gray-500 animation-on-hover w-full h-full">
        <h1 className="text-xl font-bold">{org}</h1>
      </div>
    </div>
  );
}
