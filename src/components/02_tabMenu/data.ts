import { faker } from '@faker-js/faker';

const COUNT = 4;
const DESCRIPTION_MAX_LENGTH = 100;

const truncate = (text: string, maxLength: number) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()} ...` : text;

const data = Array.from({ length: COUNT }, () => ({
  id: faker.database.mongodbObjectId(),
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: truncate(faker.lorem.paragraph(), DESCRIPTION_MAX_LENGTH),
}));

export default data;
