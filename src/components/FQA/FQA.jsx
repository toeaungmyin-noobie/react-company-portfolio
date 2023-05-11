import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './FQA.css';
const FQA = () => {
	return (
		<div className='faq '>
			<div className='contaienr mx-auto '>
				<div className='grid grid-cols-1 md:grid-cols-2 '>
					<div className='bg-white px-8 lg:px-28 py-8 md:py-12 z-10'>
						<h4 className='md:text-lg text-sm primary-color mb-4 uppercase'>
							DROP A MESSAGE
						</h4>
						<h1 className='text-lg md:text-3xl font-medium mb-8'>Request A Quote</h1>
						<div className=''>
							<form action=''>
								<div className='flex flex-col md:flex-row gap-8 my-5'>
									<div className='form-control w-full max-w-xl'>
										<label className='label'>
											<span className='label-text font-semibold tracking-wider uppercase text-gray-600 text-xs'>
												YOUR FULL NAME
											</span>
										</label>
										<input
											type='text'
											placeholder='Your Full Name'
											className='input input-bordered rounded-none w-full max-w-xl hover:outline-0 focus:outline-0'
										/>
									</div>
									<div className='form-control w-full max-w-xl'>
										<label className='label'>
											<span className='label-text font-semibold tracking-wider uppercase text-gray-600 text-xs'>
												EMAIL ADDRESS
											</span>
										</label>
										<input
											type='email'
											placeholder='Email'
											className='input input-bordered rounded-none w-full max-w-xl hover:outline-0 focus:outline-0'
										/>
									</div>
								</div>
								<div className='form-control w-full max-w-xl mb-5'>
									<label className='label'>
										<span className='label-text font-semibold tracking-wider uppercase text-gray-600 text-xs'>
											SELECT SUBJECT
										</span>
									</label>
									<select className='select select-bordered rounded-none text-gray-400 font-normal hover:outline-0 focus:outline-0'>
										<option>Construction Services</option>
										<option>Infrastructure Services</option>
										<option>Architecture Services</option>
										<option>Budget Planning</option>
										<option>Interior &amp; Exterior Design</option>
										<option>Project Planning</option>
										<option>Others</option>
									</select>
								</div>
								<div className='form-control mb-5'>
									<label className='label'>
										<span className='label-text font-semibold tracking-wider uppercase text-gray-600 text-xs'>
											MESSAGE
										</span>
									</label>
									<textarea
										className='textarea textarea-bordered h-40 rounded-none hover:outline-0 focus:outline-0'
										placeholder='MESSAGE'
										cols={'30'}
										rows={'7'}></textarea>
								</div>
								<button className='btn bg-primary-color border-none rounded-sm uppercase hover:bg-amber-500'>
									Send Message
								</button>
							</form>
						</div>
					</div>
					<div className='relative bg-transparent'>
						<div className='overlay'></div>
						<div className='relative px-8 lg:px-28 py-8 md:py-12 z-50'>
							<h4 className='md:text-lg text-sm primary-color font-medium mb-4'>
								Frequently Ask Question
							</h4>
							<h1 className='text-xl md:text-5xl font-medium mb-6'>
								You Want To Ask Something From Us?
							</h1>
							<p className=' text-gray-500 mb-4'>
								A small river named Duden flows by their place and supplies it with the
								necessary regelialia. It is a paradisematic country, in which roasted
								parts of sentences fly into your mouth.
							</p>
							<Accordion>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											What harsh truths do you prefer to ignore?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
											occaecat ut occaecat consequat est minim minim esse tempor laborum
											consequat esse adipisicing eu reprehenderit enim.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Is free will real or just an illusion?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
											nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
											duis nulla non.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											Is free will real or just an illusion?
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
											In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
											nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
											duis nulla non.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FQA;
