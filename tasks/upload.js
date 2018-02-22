/**
 * Created by Henry Huang on 10/29/17.
 */
import gh from 'ghreleases';
import moment from 'moment';

const token = process.env.GITHUB_TOKEN;
const branch = process.env.TRAVIS_BRANCH || 'dev';
const user = process.env.USER || 'henryhuang';
const org = process.env.ORG || 'teambebop6';
const repo = process.env.REPO || 'upload-samples';
const distName = process.env.DIST_NAME || 'dist.zip';

const auth = {
  token,
  user,
};

export default () => {

  console.log('creating release...');

  if (!token) {
    throw Error('GIT_HUB_TOKEN environment variable have not defined!');
  }

  const timeTag = moment().format('YYYYMMDDHHmmss');
  const tag_name = branch + '-build-' + timeTag;
  const data = {
    tag_name: tag_name,
    name: 'Build at ' + timeTag,
    body: 'Automatically release from travis.'
  };

  gh.create(auth, org, repo, data, (err) => {
    if (err) {
      throw new Error(err.message);
    }

    console.log('release created!');
    console.log('asset uploading...');
    const ref = 'tags/' + tag_name;
    const files = [
      distName,
    ];

    gh.uploadAssets(auth, org, repo, ref, files, () => {
      if (err) {
        throw new Error(err.message);
      }
      console.log('asset uploaded!');
    });
  });
};
