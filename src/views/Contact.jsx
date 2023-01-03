import SocialMedia from '../components/SocialMedia';

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="border p-12 w-1/2 h-[400px] flex flex-col justify-between">
        <p>You can contact me at</p>
        <a
          href="mailto:mrandikadafa@gmail.com"
          className="bg-black text-white flex justify-center py-4"
        >
          Contact Me
        </a>
        <div className="flex flex-col gap-4">
          <p>Or, you can follow me on my social media!</p>
          <div className="flex gap-4">
            <SocialMedia
              url="https://www.instagram.com/randika.dafa/"
              name="Instagram"
              altName="insta"
            />
            <SocialMedia
              url="https://www.linkedin.com/in/randika-dafa"
              name="Linkedin"
              altName="linkedin"
            />
            <SocialMedia
              url="https://www.github.com/dafaarmanto"
              name="Github"
              altName="github"
            />
            <SocialMedia
              url="https://www.dribbble.com/dafaarmanto"
              name="Dribbble"
              altName="dribbble"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
