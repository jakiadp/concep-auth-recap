import React from 'react';

const About = () => {
    return (
        <div className='w-11/12  mx-auto mt-10 '>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 bg-gray-100 dark:text-gray-900 ">
	<div className="w-full mx-auto space-y-4">
		<h1 className="text-5xl font-bold leading-none">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
		<div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline bg-violet-600 text-base-100">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline bg-violet-600 text-base-100">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline bg-violet-600 text-base-100">#Angular</a>
		</div>
		<p className="text-sm dark:text-gray-600">by
			<a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-violet-600">
				<span>Leroy Jenkins</span>
			</a>on
			<time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
		</p>
	</div>
	<div className="dark:text-gray-800">
		<p>Insert the actual text content here...</p>
	</div>
</article>
        </div>
    );
};

export default About;