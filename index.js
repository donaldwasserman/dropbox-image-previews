module.exports = app => {

  app.on(['issues.opened', 'issues.edited', 'pull_request.opened', 'issue_comment.created', 'issue_comment.edited'], async context => {
    let [owner, repo] = context.payload.repository.full_name.split('/');
    let type;

    switch(context.name) {
      case 'issues':
         type = 'issue';
          break;
      case 'issue_comment': 
        type = 'comment';
        break;
    }
    let body = replacer(context.payload[type].body)
    console.log(body)
    if (body === false) {
      console.log('no changes')
      return;
    }

    if (type === 'issue') {
      let params = context.issue({body})
      return context.github.issues.edit(params)
    }

    if (type ===  'comment') {
      return context.github.issues.editComment({owner, repo, body, number: context.payload.issue.number, comment_id: context.payload.comment.id});
    }
  });
}

const replacer = function(text) {
  let regex = new RegExp(/https?:\/\/(www\.)dropbox\.com\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\?dl=0/gi);
  let output = text;
  let more;
  let counter = 0;
  while ((more = regex.exec(text)) !== null) {
    counter++;
    let currentMatch = more[0];
    console.log(currentMatch)
    output = output.replace(currentMatch, formatImage(currentMatch))
  }
  if (counter < 1) {
    return false;
  }
  return output;
}


const formatImage = function(dropboxUrl) {
  let base = dropboxUrl.split('?')[0];
  return `![](${base}?raw=1)`;
}