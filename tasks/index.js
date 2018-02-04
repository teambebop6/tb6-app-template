/**
 * Created by Henry Huang.
 */
import parseArgs from 'minimist';
import upload from './upload';
import sample from './sample';

const args = parseArgs(process.argv.slice(2));

const action = args.a;
switch (action) {
  case 'upload': {
    upload();
    break;
  }
  case 'sample': {
    sample();
    break;
  }
  default: {
    console.error(`Cannot find action with name ${action}`);
  }
}