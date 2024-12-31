```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (url) => {
      setInitialUrl(url);
    };

    Linking.addEventListener('url', handleUrlChange);

    return () => {
      Linking.removeEventListener('url', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        setInitialUrl(url);
      }
    });
  }, []);

  return (
    <View>
      {initialUrl && (
        <Text>Deep Link Received: {initialUrl}</Text>
      )}
    </View>
  );
}
```