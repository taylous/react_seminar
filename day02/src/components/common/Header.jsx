import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mr-5">
        <button
          className="btn btn-xs btn-primary"
          onClick={() => {
            navigate('/');
          }}
        >
          리스트 보기
        </button>
      </div>

      <div>
        <button
          className="btn btn-xs btn-secondary"
          onClick={() => {
            navigate('/temp');
          }}
        >
          임시 페이지
        </button>
      </div>
    </div>
  );
};

export default Header;
