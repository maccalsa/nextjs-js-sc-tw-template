import Head from 'next/head'
import styled from 'styled-components';
import tw from "twin.macro";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <StyledButton>styled-components</StyledButton>
        <br/>
        <TailwindButton>twin.macro</TailwindButton>
        <br />
        <ConditionalButton isRed={true}>Conditional Tailwind red</ConditionalButton>
        <br />
        <ConditionalButton isRed={false}>Conditional Tailwind !red</ConditionalButton>
      </main>

    </div>
  )
}

const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const ConditionalButton = styled.button(({ isRed }) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
  `,
]);