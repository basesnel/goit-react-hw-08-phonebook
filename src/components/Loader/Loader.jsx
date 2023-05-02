import { Oval } from 'react-loader-spinner';
import { LoaderBlock } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBlock>
      <Oval
        height={50}
        width={50}
        color="#4080f0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#d0d0d0"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </LoaderBlock>
  );
}
