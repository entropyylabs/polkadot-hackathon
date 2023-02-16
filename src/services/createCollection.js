export async function createCollection(sdk, address, details) {
  const { parsed, error } = await sdk.collections.creation.submitWaitResult({
    address,
    name: details.name,
    description: details.description,
    tokenPrefix: details.token,
    permissions: {
      nesting: {
        tokenOwner: true,
        collectionAdmin: true,
      },
    },
  });

  if (error) {
    console.log("create collection error", error);
    process.exit();
  }

  const { collectionId } = parsed;

  return sdk.collections.get({ collectionId });
}
