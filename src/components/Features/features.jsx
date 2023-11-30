import iconChat from "../../img/Images Compressed/icon-chat.webp";
import iconMoney from "../../img/Images Compressed/icon-money.webp";
import iconSecurity from "../../img/Images Compressed/icon-security.webp";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      <FeaturesCard
        key={"6e8r6er784g"}
        title={"You are our #1 priority"}
        text={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
        image={iconChat}
      />
      <FeaturesCard
        key={"8h5d4"}
        title={"More savings means higher rates"}
        text={
          "The more you save with us, the higher your interest rate will be!"
        }
        image={iconMoney}
      />
      <FeaturesCard
        key={"968lhij74"}
        title={"Security you can trust"}
        text={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
        image={iconSecurity}
      />
    </section>
  );
}

export default Features;
