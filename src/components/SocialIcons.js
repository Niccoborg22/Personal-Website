const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/Niccoborg22"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Niccoló Borgato' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/niccolo-matteo-borgato-a47059159/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Niccoló Borgato' LinkedIn Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.instagram.com/nicco_borgato/"
      >
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Niccoló Borgato' Instagram Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/borgato_niccolo"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Niccoló Borgato' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
