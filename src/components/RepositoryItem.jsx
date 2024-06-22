import { Text, View, StyleSheet, Image } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
  },
  flexHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  flexVertical: {
    flexDirection: "column",
    marginLeft: 10,
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: "#ffffff",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 5,
  },
  description: {
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    color: theme.colors.textSecondary,
  },
  boldFont: {
    fontWeight: "bold",
  },
});

const getFormattedCountByThousand = (count) => {
  if (count < 1000) {
    return count;
  }

  return (count / 1000).toFixed(1) + "k";
};

const RepositoryItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexHorizontal}>
        <Image style={styles.icon} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.flexVertical}>
          <Text style={styles.boldFont}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.boldFont}>
            {getFormattedCountByThousand(stargazersCount)}
          </Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldFont}>
            {getFormattedCountByThousand(forksCount)}
          </Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldFont}>
            {getFormattedCountByThousand(reviewCount)}
          </Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldFont}>{ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
