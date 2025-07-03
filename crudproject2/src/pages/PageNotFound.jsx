import FuzzyText from '../../fuzzy/FuzzyText/FuzzyText';

const PageNotFound = () => {
  return (
    <div className="w-full  text-center flex justify-center ">
       <FuzzyText
    fontSize="clamp(1.5rem, 5vw, 3rem)"
    fontWeight={700}
    color="red"
  >
    Page Not Found
  </FuzzyText>
    </div>
  )
}

export default PageNotFound
