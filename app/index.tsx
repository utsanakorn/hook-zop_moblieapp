import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Form Validation App</Text>
      </View>

      <View style={styles.menuContainer}>
        <Link href="/employees" asChild>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="people-outline" size={32} color="#007AFF" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Employee Form</Text>
              <Text style={styles.menuDescription}>Add employee information</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        </Link>

        <Link href="/signin" asChild>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="log-in-outline" size={32} color="#34C759" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Sign In</Text>
              <Text style={styles.menuDescription}>Login to your account</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        </Link>

        <Link href="/signup" asChild>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="person-add-outline" size={32} color="#FF9500" />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Sign Up</Text>
              <Text style={styles.menuDescription}>Create new account</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  menuContainer: {
    gap: 15,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  footer: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 14,
  },
});
