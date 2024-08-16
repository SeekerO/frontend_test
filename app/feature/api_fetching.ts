import axios from "axios";

export default async function api_fetching() {
  const response = await axios.get(
    "https://my.api.mockaroo.com/new_data_front_end_test.json",
    {
      headers: {
        "X-API-Key": "11712a40",
      },
    }
  );

  return response.data;
}
