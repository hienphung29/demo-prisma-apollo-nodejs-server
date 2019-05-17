function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id }).postedBy();
}

function votes(parent, args, context) {
  const data = context.prisma.link({ id: parent.id }).votes();
  const count = context.prisma
    .votesConnection({
      where: {
        link: {
          id: parent.id
        }
      }
    })
    .aggregate()
    .count();
  return {
    data,
    count
  };
}

module.exports = {
  postedBy,
  votes
};
