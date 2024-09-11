import BlocksWave from "./BlocksWave";

const PageLoader = () => {
	return (
		<div className='absolute top-0 left-0 h-screen w-full flex justify-center items-center text-blue-600'
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
			}}
		>
			<BlocksWave size='4rem' />
		</div>
	);
};

export default PageLoader;
