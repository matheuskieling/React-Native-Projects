import { CATEGORIES } from '../data/dummy-data'
import { FlatList, SectionListRenderItemInfo } from 'react-native';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../App';

export default function CategoriesScreen() {
  const navigation = useNavigation<StackNavigationProp<RootParamList, 'MealsCategories'>>();
  const renderCategoryItem = (data: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: data.item.id,
      })
    }
    return <CategoryGridTile title={data.item.title} color={data.item.color} onPress={pressHandler} />
  }
  return (
    <FlatList data={CATEGORIES}
              keyExtractor={(item) => item.id}
              renderItem={(item: ListRenderItemInfo<Category>) => renderCategoryItem(item) }
              numColumns={2}
    />
  )
}