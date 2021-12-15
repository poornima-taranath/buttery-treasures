import react from "react";
import { useParams } from "react-router";
import { Button, Label, Container } from "semantic-ui-react";

export default function Display(props) {
  const { id } = useParams();
  console.log(id);

  if (id == 3) {
    return (
      <Container textAlign="left">
        <h3>Chocochip Cookie</h3>
        1. Melt butter then let cool until it has solidified a bit. <br></br>
        2. Add white and brown sugar to butter and mix well until incorporated,
        then add eggs and vanilla extract and blend well. Set aside. <br></br>
        3. In another bowl, sift in flour, baking soda, and salt, mix well.
        Preheat oven at 190°C/ 374°F(top and bottom heat). <br></br>
        4. Divide the flour mixture into 3 portions. Sift each part into the
        bowl of butter and egg from (2), incorporate with a spatula before
        adding extra flour. We will have a quite dry cookie dough. Finally, add
        about 4/5 of the chocolate chips, incorporate them into the dough. * In
        this step, you can also mix ingredients with a mixer (at low speed){" "}
        <br></br>
        5. Prepare a baking tray lined with parchment paper. Take about 30 grams
        of cookie dough, shape into a ball, then put on the tray. Continue with
        the rest of dough. Leave about 3 ~ 5 cm space between two pieces of
        dough. * If the dough is too wet, too soft or sticky to be shaped, let
        it sit in<br></br>
        the fridge for about 20 ~ 30 minutes until it gets firmer and less
        sticky. 6. Lightly press the cookie dough to flatten them a little bit.
        Place the remaining chocolate chip cookies onto the dough. These choco
        chips will stay on top even after baked, making the cookie more
        attractive and tempting <br></br>
      </Container>
    );
  } else {

    return(
    <Container textAlign="left">
      <h3>Rainbow Cake</h3>
      STEP 1 Heat oven to 350°F. Grease and flour 2 (8-inch) round cake pans or
      spray with baking spray. Set aside.  <br></br>STEP 2 Combine flour, baking powder
      and 1/4 teaspoon salt in bowl; set aside.  <br></br> STEP 3 Beat sugar and 1 cup
      butter in another bowl at medium speed, scraping bowl occasionally, until
      creamy. Add eggs, 1 at a time, beating well after each addition. Add 1
      tablespoon vanilla; mix well. Add flour mixture alternately with milk,
      beating at low speed after each addition, just until mixed.  <br></br>STEP 4 Divide
      batter evenly among 6 bowls with about 3/4 cup each. Tint cake batters
      red, orange, yellow, green, blue and purple. Spread red and orange batter
      into prepared pans. Bake 8-10 minutes or until toothpick inserted into
      center comes out clean. Cool 3 minutes; remove from pans to cooling rack.
      Cool completely. Meanwhile, wash pans; grease and flour pans. Repeat with
      remaining colors until all cake layers are baked.  <br></br>STEP 5 Beat 2 cups
      butter in medium bowl at medium speed until creamy. Gradually add powdered
      sugar and 1/4 teaspoon salt alternatley with whipping cream and 1
      tablespoon vanilla, beating at low speed until well incorporated. Beat at
      medium speed until smooth and creamy. Remove 2 cups frosting; set aside.
      Divide remaining frosting evenly among 6 bowls with about 1/3 cup each.
      Tint frostings red, orange, yellow, green, blue and purple. Set aside. <br></br>
      STEP 6 Place purple cake layer onto serving plate, bottom-side up. Frost
      top with 1/4 cup white frosting. Place blue cake layer over frosting;
      frost with 1/4 cup white frosting. Continuing adding green, yellow, orange
      and red layers in that order, frosting with 1/4 cup white frosting between
      each layer. Frost outside of cake with remaining white frosting. This
      layer of frosting will be thin and cake will be visible through frosting.
      Once frosted, refrigerate cake 30 minutes. (This is called a crumb coat
      and will prevent crumbs from interfering when piping rosettes.) STEP 7
      Place each tinted frosting into individual resealable plastic food bag;
      push frosting to one corner. Cut off 1/2 inch from tip of corner. Place
      18-inch-long piece of plastic food wrap onto counter surface. Pipe each
      color onto plastic wrap to form wide 12-inch horizontal lines (using all
      of frosting) that are touching.
    </Container>);
  }
}
