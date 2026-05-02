export type Client = {
  name: string;
  logoSrc?: string;
};

export const CLIENTS: Client[] = Array.from({ length: 19 }, (_, i) => {
  const n = i + 2;
  return {
    name: `Client ${n}`,
    logoSrc: `/logos/${n}.jpg`,
  };
});
