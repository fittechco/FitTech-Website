import data from "../../data.json"
import { useRef } from 'react'
import UseIntersection from "../useIntersection"
import Image from "next/image"
// What our customers say

function CustomersReviewCard(props: {
    cutomerReview: {
        websiteImageDesktop: string,
        websiteImageMobile: string,
        review: string,
        websiteUrl: string,
        author: {
            name: string,
            position: string,
            image: string
        }
    }
}) {
    const { cutomerReview } = props
    const customerReviewRef = useRef<HTMLDivElement | null>(null)
    const isVisible = UseIntersection(customerReviewRef, "0px")
    return (
        <div
            ref={customerReviewRef}
            style={{
                boxShadow: "0px 4px 9px 2px rgba(0, 0, 0, 0.15)"
            }}
            className={`customer-reviews-card w-full flex flex-col md:flex-row p-3 md:p-6 gap-6 rounded-3xl border border-mainColorLight
            transition-all duration-1000 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-1/4 opacity-0"}`}>
            <div className="w-full md:w-[55%] relative">
                <div className="w-full"></div>
                <Image
                    width={1080}
                    height={720}
                    src={cutomerReview.websiteImageDesktop}
                    className='border-[16px] border-thirdColor rounded-3xl max-md:hidden'
                    alt={cutomerReview.author.name} />
                <Image
                    width={375}
                    height={812}
                    src={cutomerReview.websiteImageMobile}
                    className='border-[6px] mx-auto border-thirdColor rounded-3xl md:hidden w-56'
                    alt={cutomerReview.author.name} />
            </div>
            <div
                style={{
                    boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.21) inset"
                }}
                className="info space-y-6 w-full md:w-[45%] p-5 bg-mainColor border border-mainColor2 h-fit rounded-3xl">
                <p className='text-thirdColor text-lg lg:text-xl'>{cutomerReview.review}</p>
                <span className="visit-website">
                    <a
                        target="_blank"
                        className="hover:underline text-accentColor text-lg lg:text-xl" href={cutomerReview.websiteUrl}>
                        {"Visit website >"}
                    </a>
                </span>
                <div className='author-info flex gap-6'>
                    <Image
                        width={64}
                        height={64}
                        className='author-image w-16 h-16'
                        src={cutomerReview.author.image}
                        alt="customerReview"
                    />
                    <div className="author-name flex flex-col justify-between">
                        <h3 className='mainText / font-montserrat text-xl md:text-2xl font-bold text-thirdColor'>{cutomerReview.author.name}</h3>
                        <p className='text-thirdColor3 text-lg md:text-xl'>{cutomerReview.author.position}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CustomersReview() {
    const customersReview = data.customersReview
    return (
        <div className='cutomer-reviews-container container'>
            <div className="customer-reviews-wrapper flex">
                {customersReview.map((cutomerReview, index) => {
                    return <CustomersReviewCard key={index} cutomerReview={cutomerReview} />
                })
                }
            </div>
        </div>
    )
}
