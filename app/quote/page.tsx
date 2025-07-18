import RequestQuoteForm from "../components/QuoteForm";

export default function Quote(){
    return(
        <section className="bg-white px-3 md:px-12 lg:px-24 py-20">
            <div className="max-w-6xl mx-auto text-center mt-4">
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500 font-extralight">Request your Quote, for </span>
            <span className="text-blue-600 ">
             LDPE, HDPE, and Polythene Packaging Solutions
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto ">
          Whether you&apos;re exploring pricing options or ready to place an order, we encourage you to request a customized quote using the form below. For the most accurate estimate, please include as many details as possible in your submission.
          </p>
           
            <RequestQuoteForm/>
            </div>
        </section>
    )
}