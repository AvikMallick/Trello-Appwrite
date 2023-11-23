import Image from 'next/image';

function Header() {
  return (
    <header>
      <Image
        src='https://links.papareact.com/c2cdd5'
        alt='Trello Logo'
        width={300}
        height={300}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
      />

      <div>
        {/* Search Box */}
        <form>
          <input type='text' />
          <button hidden>Search</button>
        </form>

        {/* Avatar */}
      </div>
    </header>
  );
}
export default Header;
