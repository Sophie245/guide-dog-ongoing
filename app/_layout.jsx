// _layout.jsx
import { Tabs } from 'expo-router'; // Importing Tabs component from expo-router
import TabBar from '../components/TabBar'; // Adjust the import path

const _layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />} // Use the custom TabBar
    >
      <Tabs.Screen
        name="index" // Name for the Home tab
        options={{
          title: "Home" // Title for the tab
        }}
      />
      <Tabs.Screen
        name="explore" // Name for the Explore tab
        options={{
          title: "Explore" // Title for the tab
        }}
      />
      <Tabs.Screen
        name="create" // Name for the Create tab
        options={{
          title: "Create" // More descriptive title for the tab
        }}
      />
      <Tabs.Screen
        name="profile" // Name for the Profile tab
        options={{
          title: "Profile" // Title for the tab
        }}
      />
      <Tabs.Screen
        name="misc" // Name for the Misc tab
        options={{
          title: "Miscellaneous" // Title for the tab
        }}
      />
    </Tabs>
  );
};

export default _layout; // Export the _layout component
