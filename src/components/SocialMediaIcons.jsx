const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/grantmacmillan/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedinwhite.png" />
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/grantmacmillan"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/githubwhite.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
