function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export default function showPrime() {
  const conter = 19;

  return (
    <>
      <div>
        <p>
          number {conter} is : {isPrime(conter) ? "Prime" : "Not Prime"}
        </p>
      </div>
    </>
  );
}
