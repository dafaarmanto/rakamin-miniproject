const SocialMedia = ({ url, name, altName }) => {
  return (
    <a href={`${url}`} target="_blank" rel="noopener noreferrer">
      <img
        src={`/images/icons/${name}.svg`}
        alt={`${altName}`}
        width={28}
        height={28}
      />
    </a>
  );
};

export default SocialMedia;
