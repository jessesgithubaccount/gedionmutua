import client from '../../tina/__generated__/client';

export async function getHome() {
  return client.queries.home({ relativePath: 'index.json' });
}

export async function getAbout() {
  return client.queries.about({ relativePath: 'index.json' });
}

export async function getWork() {
  return client.queries.work({ relativePath: 'index.json' });
}
