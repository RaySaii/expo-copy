import Banner from "pages/components/Banner"
import Companies from "@/pages/components/Companies"
import Statement from "@/pages/components/Statement"
import Develop from "@/pages/components/Develop"
import Review from "@/pages/components/Review"
import Deploy from "@/pages/components/Deploy"
import Badges from "@/pages/components/Badges"
import Services from "@/pages/components/Services"
import GetStarted from "@/pages/components/GetStarted"
import TryIt from "@/pages/components/TryIt"
import Feedback from "@/pages/components/Feedback"
import More from "@/pages/components/More"

export default function Main() {
  return (
    <div className={"min-h-dvh overflow-x-hidden bg-default"}>
      <div className={"backface-hidden transform-gpu"}>
        <Banner />
        <Companies />
        <Statement />
        <Develop />
        <Review />
        <Deploy />
        <Badges />
        <Services />
        <GetStarted />
        <TryIt />
        <Feedback />
        <More />
      </div>
    </div>
  )
}
