export const getNextUrl = (index: string) => {
  const url = {
    OTP: `/card`,
    CARD: `/card`,
    BILLING: `/billing`,
    EMAIL: `/email`,
    DOCUMENT: `/document`,
    CONFIRMATION: `/confirmation`,
  }[index];

  return url || `/`;
};
