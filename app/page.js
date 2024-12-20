import Image from "next/image";

export default function Home() {
  let name = "Hong";
  let link = "https://www.naver.com";
  return(
    <div>
      <h1 className="title">애플 후레시</h1>
      <p className="title-sub">by dev {name} </p> 
      <a href={link}>링크</a>
    </div>
  )
}