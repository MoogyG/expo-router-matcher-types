import { renderRouter, screen } from 'expo-router/testing-library';

it('asserts the pathname with a matcher from expo-router/testing-library', async () => {
  await renderRouter(['index', 'directory/a', '(group)/b'], {
    initialUrl: '/directory/a',
  });

  expect(screen).toHavePathname('/directory/a');
});
