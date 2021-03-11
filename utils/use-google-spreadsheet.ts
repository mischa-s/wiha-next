import { useEffect, useState } from 'react';
import axios from 'axios';

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const useGoogleSpreadsheet = (sheet: string, range: string) => {
  const [state, setState] = useState({ valueRanges: null, isFetching: false });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const handleFetch = async () => {
      const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheet}/values:batchGet?ranges=${range}&access_token=${googleKey}&key=${googleKey}`;

      setState({ valueRanges: null, isFetching: true });

      try {
        const { data } = await axios.get(endpoint, {
          cancelToken: source.token,
        });

        const { valueRanges } = data;
        setState({ valueRanges, isFetching: false });
        source.cancel('cancelled by useEffect cleaning');
      } catch (err) {
        setState({ valueRanges: null, isFetching: false });
      }
    };
    handleFetch();
  }, [sheet, range]);
  return state;
};

export default useGoogleSpreadsheet;
