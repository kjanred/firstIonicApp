import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {

  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/productstable";

  useEffect(() => {
    fetch(dataURL) 
    .then(response => response.json()) 
    .then(data => setDataset(data)) 
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id="customers-list">
          <IonListHeader>Products for sale</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
            <IonLabel>
              <IonCard>
              <img alt={item.name} src={item.guid} />
              <IonCardHeader>
              <IonCardTitle>{item.name}</IonCardTitle>
                    <IonCardSubtitle>${item.price}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>{item.description}</IonCardContent>
              </IonCard>
            </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
