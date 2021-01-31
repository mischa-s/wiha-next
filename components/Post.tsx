type PostProps = {
  title: string,
  image: {
    file: {
      url: string
    },
    description: string
  };
};


export default function Post({ image, title }: PostProps) {
  let { file, description } = image

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
      </div>
    </div>
  )
}